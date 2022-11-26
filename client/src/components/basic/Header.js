import Button from "./Button";

const Header = ({ title = 'Task Tracker', onClick, cardName }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="black" text={cardName} onClick={onClick} />
    </header>
  );
};


export default Header;
