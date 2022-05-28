function BasicPage() {
  return (
    <main className="grid gap-4 bg-white px-8 lg:grid-cols-2">
      {Object.entries(props).map(([name, data], index) => (
        <BasicContent
          key={index}
          title={name}
          subtitle={`${(index + 1).toString().padStart(2, "0")}. ${
            data.subtitle
          }`}
          desc={data.description}
          img={data.banner}
          links={[
            { url: "#", text: "全面展望①" },
            { url: "#", text: "全面展望②" },
            { url: "#", text: "全面展望③" },
            { url: "#", text: "ジオラマ紹介" },
          ]}
        />
      ))}
    </main>
  );
}

export default BasicPage;
