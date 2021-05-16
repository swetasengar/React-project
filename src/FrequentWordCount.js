import { useEffect, useState } from "react";
import axios from "axios";
import { ReactTable } from "./ReactTable";




export const FrequentWordCount = () => 
{
  const [value, setVaue] = useState(0);
  const [topNWord, setTopNword] = useState([]);
  const [sortedArr, setSortedArr] = useState([]);

  const onChange = (event) => {
    console.log(event.target.value);
    setVaue(event.target.value);
  };

  useEffect(() => {
    axios
      .get(
        " https://raw.githubusercontent.com/invictustech/test/main/README.md"
      )

      .then((response) => {
        // console.log(
        //   "response",
        //   response.data
        //     .replace(/\s\s+/g, "")
        //     .replace(/\r?\n|\r/g, "")
        //     .replace(/[.;,-]/g, "")
        //     .split(" ")
        // );
        let arrOfWords = response.data
          .replace(/\s\s+/g, "")
          .replace(/\r?\n|\r/g, "")
          .replace(/[.;,-]/g, "")
          .split(" ");
        calculateNfrequentWord(arrOfWords);
      });
  }, []);



  useEffect(() => {
    // console.log("topNWord", topNWord);
  }, [topNWord]);
  const onSubmit = (event) => {
    // console.log("value entered:-", value);
    // console.log("sortedArr", sortedArr);
    // console.log("topNWOrd:----", sortedArr.slice(0, value));

    setTopNword(sortedArr.slice(0, value));
    // console.log("slicedArr", topNWord);
  };
  const calculateNfrequentWord = (arr) => {
    let objWord = {};
    for (let i = 0; i < arr.length; i++) {
      const el = arr[i];

      if (!objWord[el]) {
        objWord[el] = 1;
      } else {
        objWord[el] = objWord[el] + 1;
      }
    }
    // console.log("final word:-", objWord);
    let tempArr = [];
    for (let word in objWord) {
      tempArr.push([word, objWord[word]]);
    }
    tempArr.sort(function (a, b) {
      return b[1] - a[1];
    });
    // console.log("tempArr:-", tempArr);
    setSortedArr(tempArr);
  };

  return (
    <div>
      <input onChange={onChange} type="number" placeholder="Enter a number" />
      <button onClick={onSubmit}>Submit</button>
      <ReactTable topNWord={topNWord} />
    </div>
  );
};

