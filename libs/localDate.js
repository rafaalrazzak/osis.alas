const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const localDate= (date) => new Date(date).toLocaleDateString("id", options);

  export default localDate