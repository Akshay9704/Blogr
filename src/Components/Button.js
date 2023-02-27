const Button = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            <button className="border border-white py-2 px-4 rounded-full">
              Login
            </button>
          </li>
          <li>
            <button className="btn-light bg-white px-4 py-2 rounded-full">
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Button;
