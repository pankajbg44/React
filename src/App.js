function App() {
  let text = "Hello Lorem!!!";
  let para ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta esse, fugiat labore, reprehenderit facere perspiciatis voluptate, ducimus et aut ratione inventore? At rem quas fugiat soluta! Cumque minima quas ad sapiente quae consequuntur accusamus aut nam beatae dignissimos veritatis, eum vel quidem iure praesentium reiciendis possimus enim aperiam excepturi dolore.";
  let style1 = {color:"maroon", backgroundColor: "rgb(178, 214, 243)",padding:8, textAlign:"center"};
  let style2 = {color:"maroon", backgroundColor: "rgb(193, 240, 165)",padding:8, margin:3, fontSize:20};

  return (
    <div>
      <h1 style={style1}>{text}</h1>
      <p style={style2}>{para}</p>
      <p style={style2}>{para}</p>
    </div>
  );
}
export default App;
