import React, { useState } from 'react';

interface Props {
  name: string;
  label: string;
  pattern: RegExp;
  errorMessage: string;
  onChange: (name: string, value: string) => void;
}

function InputField({ name, label, pattern, errorMessage, onChange }: Props) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [touched, setTouched] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue(value);

    if (!value) {
      setError(`Please enter your ${label.toLowerCase()}`);
    } else if (!pattern.test(value)) {
      setError(errorMessage);
    } else {
      setError('');
    }

    onChange(name, value);
  };

  const handleBlur = () => {
    setTouched(true);
  };

  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        placeholder={label}
        name={name}
        id={name}
        className="px-2 py-1 rounded-md border-gray-200 bg-gray-200"
        required
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched && error && (
        <p className="text-red-500 mt-2 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 inline-block mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm1-8a1 1 0 11-2 0 1 1 0 012 0zm-1 4a1 1 0 110-2 1 1 0 010 2z"
              clipRule="evenodd"
            />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

export default InputField;
