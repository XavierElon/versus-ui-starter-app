# Register Main docker compose file
docker_compose("docker-compose.yml")


##############
# Backend
##############

# Specify all backend services that use the python fastapi/requirements.txt template
backend = {
    "api-classification": {"docs": "http://localhost:5002/docs"},
    "api-notify": {"docs": "http://localhost:5012/docs"},
    "api-data-manager": {"docs": "http://localhost:5014/docs"},
    "api-files": {"docs": "http://localhost:5001/docs"},
    "api-camunda": {"docs": "http://localhost:5015/docs"},
    "api-worker": {"docs": "http://localhost:5015/docs"},
}

##############
# Frontend
##############

# Specify all frontend services that use the python fastapi/requirements.txt template
frontend = ["ui-starter-app"]

def register_backend():
    for service in backend:
        image_name = "starter-app-v2-mono_" + service
        build_path = service
        dockerfile = build_path + "/Dockerfile.dev"
        requirements_path = build_path + "/requirements.txt"

        docker_build(
            image_name,
            build_path,
            dockerfile=dockerfile,
            live_update=[
                sync(build_path, "/usr/src"),
                run(
                    "pip install -r requirements.txt",
                    trigger=requirements_path,
                ),
                restart_container(),
            ],
        )

        dc_resource("{}".format(service), labels=["back_end"])


register_backend()



##############
# Extras
##############
extras = ["mailhog"]


def register_extras():
    for extra in extras:
        dc_resource("{}".format(extra), labels=["extras"])


register_extras()

##############
# Datastores
##############

datastores = [  "elasticsearch", 
                "clamav"
                # , "s3local"
            ]

docker_build(
    "starter-app-v2/elasticsearch",
    "infrastructure",
    dockerfile="infrastructure/Dockerfile.elastic",
)

docker_build(
    "starter-app-v2/clamav",
    "infrastructure",
    dockerfile="infrastructure/Dockerfile.clamav",
)


def register_datastore():
    for datastore in datastores:
        dc_resource("{}".format(datastore), labels=["datastore"])


register_datastore()

local_data_stores = ["s3local"]

def register_local_datastore():
    for local_data in local_data_stores:
        dc_resource(
            "{}".format(local_data),
            labels=["local_data_stores"],
            auto_init=False,  # Since FE people like to develop locally, don't turn this on by default
        )  


register_local_datastore()

extras = ["operate", "zeebe", "tasklist", "optimize"]
connector = ["connectors"]

def register_camunda():
    for extra in extras:
        dc_resource("{}".format(extra), labels=["camunda"])


register_camunda()

def handle_connector():
    for conn in connector:
        dc_resource("{}".format(conn), resource_deps=['zeebe', 'operate'], labels=["camunda"])

handle_connector()
##############
# UI
##############
def register_frontend():
    docker_build(
        "starter-app-v2-ui-starter-app",  # Tag to match in docker compose
        "ui-starter-app/",  # UI context
        live_update=[
            sync(
            "ui-starter-app/", "/usr/src"
            ),  # Sync everything in ui-amc into /usr/src in this container
        ],
        dockerfile="ui-starter-app/Dockerfile.dev",
        network="host",  # Use network host when building. This doesnt matter, unless you use something like verdaccio to cache npm dependencies
    )

    dc_resource(
        "ui-starter-app",
        labels=["frontend"],
        auto_init=False,  # Since FE people like to develop locally, don't turn this on by default
   )


register_frontend()

# local_resource(
#     "update-submodules",
#     cmd="./sub-module-init.sh",
#     trigger_mode=TRIGGER_MODE_AUTO,
#     auto_init=True
# )

for service in backend:

    # this sonar token is a shared token with analysis access
    sonar_token = "b0005b3fa671af09cd2271e322355b2f9662455c"

    # exec into the service, run unit tests, and generate coverage report. echo allows sonar scans with failing unit tests
    run_pytest_cmd = "docker exec {service} bash -c 'pytest --cov=. --cov-report=term-missing --cov-report xml:coverage.xml || echo true'".format(
        service=service
    )

    # copy the coverage file out of the container
    retrieve_coverage_file_cmd = "docker cp {service}:/usr/src/coverage.xml {service}/coverage.xml".format(
            service=service
        )

    # Set host to deployed s6ef5y sonarqube
    # Run scan from service directory
    # specify path to local sonar-scanner
    run_sonar_scan_cmd = "export SONAR_HOST_URL='https://sonarqube.mstax.s6ef5y.com' && cd {service} && ../sonar-scanner-4.7.0.2747-macosx/bin/sonar-scanner -Dsonar.login={sonar_token} -Dsonar.projectKey=local-{service} -Dsonar.projectBaseDir=.  -Dsonar.scm.disabled=true".format(
        service=service, sonar_token=sonar_token
    )

    # aggregate the command into one string
    full_sonar_cmd = "{run_pytest_cmd} && {retrieve_coverage_file_cmd} && {run_sonar_scan_cmd}".format(
        run_pytest_cmd=run_pytest_cmd,
        retrieve_coverage_file_cmd=retrieve_coverage_file_cmd,
        run_sonar_scan_cmd=run_sonar_scan_cmd
    )

    # create the testing tilt resource
    local_resource(
        "{}-testing".format(service),
        cmd=full_sonar_cmd,
        labels=["testing"],
        auto_init=False,
    )

for service in frontend:

    # this sonar token is a shared token with analysis access
    sonar_token = "b0005b3fa671af09cd2271e322355b2f9662455c"

    # exec into the service, run unit tests, and generate coverage report. echo allows sonar scans with failing unit tests
    run_cttest_cmd = "docker exec {service} npm run cy || true".format(
        service=service
    )

    # copy the coverage file out of the container
    retrieve_coverage_file_cmd = "docker cp {service}:/usr/src/coverage/cobertura-coverage.xml {service}/cobertura-coverage.xml".format(
            service=service
        )

    # Set host to deployed s6ef5y sonarqube
    # Run scan from service directory
    # specify path to local sonar-scanner
    run_sonar_scan_cmd = "export SONAR_HOST_URL='https://sonarqube.mstax.s6ef5y.com' && cd {service} && ../sonar-scanner-4.7.0.2747-macosx/bin/sonar-scanner -Dsonar.login={sonar_token} -Dsonar.projectKey=local-{service} -Dsonar.projectBaseDir=.  -Dsonar.scm.disabled=true".format(
        service=service, sonar_token=sonar_token
    )

    # aggregate the command into one string
    full_sonar_cmd = "{run_cttest_cmd} && {retrieve_coverage_file_cmd} && {run_sonar_scan_cmd}".format(
        run_cttest_cmd=run_cttest_cmd,
        retrieve_coverage_file_cmd=retrieve_coverage_file_cmd,
        run_sonar_scan_cmd=run_sonar_scan_cmd
    )


    # create the testing tilt resource
    local_resource(
        "{}-testing".format(service),
        cmd=full_sonar_cmd,
        labels=["testing"],
        auto_init=False,
    )


# Use this command, to fetch a known working version of sonar-scanner, put into this directory, use the certificates to configure access to published sonarqube.mstax.s6ef5y.com
local_resource(
    "configure-sonarscanner-m1",
    cmd="export JAVA_HOME=/opt/homebrew/opt/openjdk//libexec/openjdk.jdk/Contents/Home && curl -LOs https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-4.7.0.2747-macosx.zip && unzip -q sonar-scanner-cli-4.7.0.2747-macosx.zip  && keytool -noprompt -keystore sonar-scanner-4.7.0.2747-macosx/jre/lib/security/cacerts -storepass changeit -trustcacerts -importcert -alias mstax-root-ca -file certs/mstax-root-ca.crt && keytool -noprompt -keystore sonar-scanner-4.7.0.2747-macosx/jre/lib/security/cacerts -storepass changeit -trustcacerts -importcert -alias mstax-sub-ca -file certs/mstax-sub-ca.crt",
    auto_init=False,
    labels=["config"]
)

# Use this command, to install the form of openjdk needed for configure-sonarscanner-m1
local_resource(
    "install-openjdk",
    cmd="brew install openjdk",
    auto_init=False,
    labels=["config"]
)

local_resource(
    "check-git-branch", 
    cmd="git submodule foreach 'git status'",
    auto_init=True,
    labels=["config"]
)


# Turn off api-dm, drop the database, create the database, re-enable api-dm, 
# trigger a migration to restore the schema, and restart api-dm one more time for data seeding
local_resource(
    "drop-and-create-database",  # Name of command in tilt ui
    cmd="\
    tilt disable api-data-manager \
    && sleep 6 \
    && docker exec  --user postgres  postgresql psql -c 'drop database if exists mstax;' \
    && docker exec  --user postgres  postgresql psql -c 'create database mstax' \
    && tilt enable api-data-manager \
    && tilt trigger run-migration",
    auto_init=False,  # Don't automatically do this when you run tilt up
    trigger_mode=TRIGGER_MODE_MANUAL,  # If you click activate in ui, then this command will run whenever seed-tables is touched
    labels=["script"],
)
# && tilt trigger run-migration \
    # && docker restart amc-data-api",
# You can run this command non-destructively as many times as you want, the alembic versions table tracks which files have been ran.
local_resource(
    "run-migration",  # Name of command in tilt ui
    cmd="sleep 3 \
    && docker exec -w /usr/src/database/ api-data-manager bash -c 'alembic upgrade head'\
    && tilt docker restart api-data-manager",
    auto_init=False,  # Don't automatically do this when you run tilt up
    trigger_mode=TRIGGER_MODE_AUTO,  # If you click activate in ui, then this command will run whenever seed-tables is touched
    labels=["script"],
)

