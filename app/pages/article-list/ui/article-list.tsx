const article_list = [
  {
    title: "Dominique Pelicot'n tytär: Isäni",
    category: "Kotimaa",
    date: "2022-02-17",
    image:
      "https://images.cdn.yle.fi/image/upload/c_crop,h_550,w_977,x_0,y_0/ar_1.7777777777777777,c_fill,g_faces,h_357,w_636/dpr_1.0/q_auto:eco/f_auto/fl_lossy/v1446461369/17-3699956373f64662d7",
  },
  {
    title: "Police remove Finns Party MP from Finnair flight",
    category: "Transport",
    image:
      "https://images.cdn.yle.fi/image/upload/ar_1.400262123197903,c_fill,g_faces,h_454,w_636/dpr_1.0/q_auto:eco/f_auto/fl_lossy/v1736678855/39-140534167839da0445a9",
    date: "2022-02-17",
  },
  {
    title:
      "Nato deploys ships to patrol the Baltic; 3 Swedish vessels to join operation",
    category: "Security",
    image:
      "https://images.cdn.yle.fi/image/upload/c_crop,x_1316,y_0,w_3413,h_3413/w_235,h_235,ar_1,c_fill/q_auto:eco,f_auto,fl_lossy/v1734778250/39-139922267669d464f938",
    date: "2025-01-12T18:00:58+0200",
  },
];

export const ArticleList = () => {
  return (
    <section className="container">
      <h1>Article List</h1>
      {article_list.map((article, index) => (
        <div key={index}>
          <h2>{article.title}</h2>
          <p>{article.category}</p>
          <p>{article.date}</p>
          <img src={article.image} alt={article.title} />
        </div>
      ))}
    </section>
  );
};
