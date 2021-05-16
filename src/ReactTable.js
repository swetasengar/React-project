export const ReactTable = (props) => {

  console.log("topNWord:-", props.topNWord);

  return (
    <>
      {props.topNWord.length > 0 && (
        <table style={{ width: "50%" }}>
          <thead>
            <tr>
              <th>Word</th>
              <th>Frequency</th>
            </tr>
          </thead>
          <tbody>
            {props.topNWord.map((arr) => {
              return (
                <tr>
                  <td> {arr[0]} </td>
                  <td> {arr[1]} </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};
