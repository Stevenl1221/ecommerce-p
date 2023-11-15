import axios from "axios";
import { useState, useEffect, memo, useMemo, useCallback } from "react";
import Child from "./Child.js";
const Account = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [test, setTest] = useState("Hello There");

  const getData = async () => {
    const { data } = await axios.get("https://api.punkapi.com/v2/beers");
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleToggle = () => {
    setToggle(!toggle);
    console.log("FIRED  TOGGLE");
  };

  const mostVolume = (items) => {
    if (items === null) return null;
    let mostVolume = {};
    let mostVolumeValue = 0;
    items.forEach((item) => {
      if (item.volume.value >= mostVolumeValue) {
        mostVolumeValue = item.volume.value;
        mostVolume = item;
      }
    });
    console.log("FIRED MOST VOLUME");
    return mostVolume;
  };

  const getMostVolume = useMemo(() => mostVolume(data), [data]);

  const returnComment = useCallback(
    (name) => {
      return test + name;
    },
    [test]
  );

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Account</h1>
      <h2>Most Volume</h2>
      <div>Most Volume item name: {getMostVolume && getMostVolume.name}</div>
      <h2>Child</h2>
      <Child returnComment={returnComment} />
      <button onClick={handleToggle}>Toggle</button>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Tagline</th>
            <th>First Brewed</th>
            <th>Description</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => {
            return (
              <tr key={i} style={{ width: "100%" }}>
                <td>{item.name}</td>
                <td>{item.tagline}</td>
                <td>{item.first_brewed}</td>
                <td>{item.description}</td>
                <td>
                  <img
                    src={item.image_url}
                    alt={item.image_url}
                    style={{ width: "auto", height: 100 }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Account;
