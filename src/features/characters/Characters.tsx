import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectPagination } from "./charactersSlice";
import { charactersURL } from "../../app/utils";
import PaginationCharacters from "./PaginCharacters";

interface ICharacter {
  id: string;
  name: string;
}

export const Characters = () => {
  const pagination = useSelector(selectPagination);
  const [totalCharacters, setTotalCharactes] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [resultPagin, setResultPagin] = useState([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
  ]);

  const outputCharaters = characters.map((character: ICharacter) => (
    <p key={character.id}>
      {character.name} - id [{character.id}]
    </p>
  ));

  useEffect(() => {
    fetch(charactersURL)
      .then((response) => response.json())
      .then((output) => {
        setTotalCharactes(Math.floor(output.info.count / 10));
      });
  }, []);

  let interrim;
  const computePagination = (paginNum: number) => {
    interrim = [];
    for (let i = paginNum - 9; i <= paginNum; i++) {
      interrim.push(i);
    }
    setResultPagin(interrim);
  };

  useEffect(() => {
    fetch(`${charactersURL}/${resultPagin}`)
      .then((response) => response.json())
      .then((output) => setCharacters(output));
  }, [pagination]);

  console.log(pagination);

  return (
    <Fragment>
      <h2>Characters</h2>
      {outputCharaters}
      <PaginationCharacters
        totalCharacters={totalCharacters}
        computePagination={computePagination}
      />
    </Fragment>
  );
};
