const ErrorMessage = ({ message }) => {
  return (
    <div className="p-4 text-red-500 text-center">
      ❌ {message}
    </div>
  );
};

export default ErrorMessage;
