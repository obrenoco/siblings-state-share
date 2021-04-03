export const Square = ({ color }: { color: string }) => {
  return (
    <div
      style={{
        width: 50,
        height: 50,
        backgroundColor: `${color}`,
        margin: "5rem auto"
      }}
    ></div>
  );
};
