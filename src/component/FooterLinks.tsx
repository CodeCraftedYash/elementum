const FooterLinks = () => {
  const title = [
    {
      title: "Company",
      values: ["Home", "Studio", "Service", "Blog"],
    },
    {
      title: "Terms & Policies",
      values: [
        "Privacy Plicy",
        "Terms & Conditions",
        "Explore",
        "Accessibility",
      ],
    },
    {
      title: "Follow Us",
      values: ["Instagram", "LinkedIn", "Youtube", "Twitter"],
    },
    {
      title: "Terms & Policies",
      values: [
        "1498w Fluton ste, STE 2D Chicgo, IL 63867",
        "(123) 456789000",
        "info@elementum.com",
      ],
    },
  ];
  return (
    <footer>
      <ul className="flex w-[80%] mx-auto items-start justify-between">
        {title.map((item, index) => (
          <li key={index}>
            <h2 className="brand" style={{fontSize:"var(--font-size-medium-small)"}}>{item.title}</h2>
            <ul className="flex flex-col gap-5 mt-5">
              {item.values.map((i, ind) => (
                <li key={ind + 999} className="satoshi hover:scale-105 hover:text-green-400 hover:cursor-pointer transition-all duration-200 ease-in-out" style={{fontSize:"var(--font-size-small)"}}>{i}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default FooterLinks;
