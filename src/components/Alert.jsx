const Alert = ({ type, text }) => {
  return (
    <div className="flex justify-center items-center fixed bottom-5 right-5 z-50">
      <div
        className={`${
          type === 'danger' ? 'bg-red-800' : 'bg-blue-800'
        } p-2 text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex items-center`}
        role="alert">
        <span
          className={`flex rounded-full ${
            type === 'danger' ? 'bg-red-500' : 'bg-blue-500'
          } uppercase px-2 py-1 text-xs font-bold mr-3`}>
          {type === 'danger' ? 'Failed' : 'Success'}
        </span>
        <span className="font-semibold mr-2 text-left flex-auto">{text}</span>
      </div>
    </div>
  );
};

export default Alert;
