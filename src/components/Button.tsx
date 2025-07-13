interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
}

const button = ({ title, ...props }: ButtonProps) => {
  return <div {...props}>{title}</div>;
};

export default button;
