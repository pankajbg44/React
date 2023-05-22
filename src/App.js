function App() {
  let text = "Hello Lorem!!!";
  let para ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta esse, fugiat labore, reprehenderit facere perspiciatis voluptate, ducimus et aut ratione inventore? At rem quas fugiat soluta! Cumque minima quas ad sapiente quae consequuntur accusamus aut nam beatae dignissimos veritatis, eum vel quidem iure praesentium reiciendis possimus enim aperiam excepturi dolore.";
  let style = "bg-light text-primary p-3 h4 shadow p-2 mb-2";
  let style2 = "text-bg-warning d-flex justify-content-center shadow p-2 mb-3"

  return (
    <div>
      <h1 className={style2}>{text}</h1>
      <p className={style}>{para}</p>
      <p className={style}>{para}</p>
      <p className={style}>{para}</p>
    </div>
  );
}
export default App;
