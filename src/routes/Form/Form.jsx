function Form() {
  const onSubmit = (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);

    // Dynamic property key, shorter version using spread
    // https://www.samanthaming.com/tidbits/37-dynamic-property-name-with-es6/
    const obj = Array.from(formData.entries()).reduce(
      (acum, [key, val]) => ({ ...acum, [key]: val }),
      {}
    );
    console.log(obj);
  };

  const form = [
    ["firstName", "First name:"],
    ["lastName", "Last name:"],
    ["password", "Password:"],
  ];
  const formEls = form.map(([name, label], idx) => (
    <label key={idx}>
      {label}
      <input name={name} type="text" />
    </label>
  ));
  return (
    <div>
      <form onSubmit={onSubmit}>
        {formEls}
        <input type="submit" />
      </form>
    </div>
  );
}
export default Form;
