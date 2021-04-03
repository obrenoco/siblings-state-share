export const List = ({ setColor }: any) => {
  const onClick = (e: any) => {
    setColor(e.target.id);
  };
  return (
    <>
      <ul>
        <li>
          <a onClick={onClick} id="#03244A" href="#">
            Azul
          </a>
        </li>
        <li>
          <a onClick={onClick} id="#000" href="#">
            Preto
          </a>
        </li>
        <li>
          <a onClick={onClick} id="#D90904" href="#">
            Vermelho
          </a>
        </li>
      </ul>
    </>
  );
};
