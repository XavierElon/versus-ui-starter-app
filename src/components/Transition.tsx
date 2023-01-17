import React, { ReactNode } from "react";
import { CSSTransition as ReactTransition } from "react-transition-group";

interface TransitionProps {
  in?: boolean;
  timeout: number;
  enter?: string;
  enterFrom?: string;
  enterTo?: string;
  leave?: string;
  leaveFrom?: string;
  leaveTo?: string;
  children: ReactNode;
  className?: string;
  show?: boolean;
  tag?: string;
  enterStart?: string;
  enterEnd?: string;
  leaveStart?: string;
  leaveEnd?: string;
  id?: string;
  role?: string;
}

function addClasses(classes: string[], ref: React.RefObject<HTMLDivElement>) {
  ref.current?.classList.add(...classes);
}

function removeClasses(classes: string[], ref: React.RefObject<HTMLDivElement>) {
  ref.current?.classList.remove(...classes);
}

export function CSSTransition(props: TransitionProps) {
  const { enter,show,tag,enterStart,role, enterFrom,id, enterTo, leave, leaveFrom, leaveStart,leaveEnd, leaveTo, enterEnd, className } = props;
  const nodeRef = React.useRef<HTMLDivElement>(null);

  const enterClasses = splitClasses(enter);
  const enterFromClasses = splitClasses(enterFrom);
  const enterToClasses = splitClasses(enterTo);
  const leaveClasses = splitClasses(leave);
  const leaveFromClasses = splitClasses(leaveFrom);
  const leaveToClasses = splitClasses(leaveTo);

  return (
    <ReactTransition
      role={role}
      id={id}
      enter={enter}
      leave={leave}
      leaveStart={leaveStart}
      leaveEnd={leaveEnd}
      enterEnd={enterEnd}
      show={show}
      tag={tag}
      enterStart={enterStart}
      className={className}
      in={props.in}
      nodeRef={nodeRef}
      timeout={props.timeout}
      unmountOnExit
      onEnter={() => {
        addClasses([...enterClasses, ...enterFromClasses], nodeRef);
      }}
      onEntering={() => {
        removeClasses(enterFromClasses, nodeRef);
        addClasses(enterToClasses, nodeRef);
      }}
      onEntered={() => {
        removeClasses([...enterToClasses, ...enterClasses], nodeRef);
      }}
      onExit={() => {
        addClasses([...leaveClasses, ...leaveFromClasses], nodeRef);
      }}
      onExiting={() => {
        removeClasses(leaveFromClasses, nodeRef);
        addClasses(leaveToClasses, nodeRef);
      }}
      onExited={() => {
        removeClasses([...leaveToClasses, ...leaveClasses], nodeRef);
      }}
    >
      <div ref={nodeRef}>{props.children}</div>
    </ReactTransition>
  );
}

function splitClasses(string: string = ""): string[] {
  return string.split(" ").filter((s) => s.length);
}

export default CSSTransition;