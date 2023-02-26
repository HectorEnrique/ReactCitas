const Sms = ({children}) => {
  return(
    <div>
      <div className = "bg-red-400 p-2 text-white text-center font-bold text-md mb-3 rounded">
        { children }
      </div>
    </div>
  );
}

export { Sms };
