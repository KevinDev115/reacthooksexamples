import { Button, Card, Spin, Typography } from "antd";
import React, { useEffect, useState } from "react";

const { Title } = Typography;
const { Meta } = Card;

const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchCharacters = async () => {
    setLoading(true);

    const res = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    );

    const data = await res.json();

    setCharacters(data.results);
    setLoading(false);
  };

  const onNext = () => setPage(page + 1);
  const onPrev = () => setPage(page - 1);

  useEffect(() => {
    fetchCharacters();
  }, [page]);

  return {
    characters,
    page,
    loading,
    onNext,
    onPrev,
  };
};

const CustomHookPage = () => {
  const { characters, page, loading, onPrev, onNext } = useCharacters();

  return (
    <div style={{ paddingBottom: "24px", maxWidth: "624px", margin: "0 auto" }}>
      <Spin spinning={loading}>
        <Title level={3}>Page {page}</Title>
        <Button type="primary" onClick={onPrev} disabled={page <= 1}>
          Prev
        </Button>
        <Button type="primary" onClick={onNext}>
          Next
        </Button>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "12px",
            marginTop: "12px",
          }}
        >
          {characters.map((item) => (
            <Card
              key={item.id}
              style={{ maxWidth: "200px", objectFit: "cover" }}
              cover={<img src={item.image} />}
              hoverable
            >
              <Meta title={item.name} description={item.species} />
            </Card>
          ))}
        </div>
      </Spin>
    </div>
  );
};

export default CustomHookPage;
