/* eslint-disable react/prop-types */
const Stats = ({ items }) => {
  const itemsLength = items.length;
  const itemPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((itemPacked * 100) / itemsLength);

  return (
    <footer
      className={
        percentage === 100
          ? "bg-green-400 fixed bottom-0 w-full h-14 flex justify-center items-center font-semibold"
          : "bg-sky-500 fixed bottom-0 w-full h-14 flex justify-center items-center"
      }
    >
      {percentage !== 100 ? (
        <>
          Tu as {itemsLength} article{itemsLength > 1 && "s"} dans ta liste
          {itemPacked ? (
            <span className="ml-1">
              dont {itemPacked} dans le panier ({percentage}%)
            </span>
          ) : null}
        </>
      ) : (
        <p>Tout est bon, tu peux maintenant passer à la caisse 🚀</p>
      )}
    </footer>
  );
};

export default Stats;
