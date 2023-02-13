import React from 'react';

interface MyProps {
  setRoute: Function;
}

const RouteSheet: React.FC<MyProps> = ({ setRoute }) => {
  const [sheetOpen, setSheetOpen] = React.useState(false);

  return (
    <>
      {sheetOpen !== false ? (
        <ul className="min-w-max z-50 p-4 flex flex-col justify-center absolute bg-white text-orange-600 text-lg font-semibold overflow-hidden">
          <li>
            <button className="btnStyle" onClick={() => setRoute(0)}>
              Московское ш., 153, корп. 2, посёлок Шушары (склад) - Дунайский просп., 34/16 (отдел
              выдачи)
            </button>
          </li>
          <li>
            <button className="btnStyle" onClick={() => setRoute(1)}>
              Московское ш., 153, корп. 2, посёлок Шушары (склад) - Купчинская ул., 32, корп. 1Д
              (отдел выдачи)
            </button>
          </li>
          <li>
            <button className="btnStyle" onClick={() => setRoute(2)}>
              Московское ш., 153, корп. 2, посёлок Шушары (склад) - Московское ш., 244 (отдел
              выдачи)
            </button>
          </li>
          <li onClick={() => setSheetOpen(!sheetOpen)}>
            <button className="btnStyle text-orange-700 text-xl" onClick={() => setRoute(2)}>
              Скрыть меню
            </button>
          </li>
        </ul>
      ) : (
        <button
          onClick={() => setSheetOpen(!sheetOpen)}
          className="btnStyle border-2 min-w-max z-50 p-4 flex flex-col justify-center absolute bg-white text-orange-600 text-lg font-semibold overflow-hidden">
          Маршруты
        </button>
      )}
    </>
  );
};

export default RouteSheet;
