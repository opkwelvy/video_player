import React from 'react';

type InputProps = React.ComponentProps<'input'> & {
  label: string;
  margin: string;
  id: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
};
const Input = ({ label, id, margin, setState, ...props }: InputProps) => {
  return (
    <div style={{ marginBottom: margin }}>
      <label htmlFor={id}>{label}</label>
      <input
        id={label}
        name={id}
        onChange={({ currentTarget }) => setState(currentTarget.value)}
        type="text"
        {...props}
      />
    </div>
  );
};

export default Input;
