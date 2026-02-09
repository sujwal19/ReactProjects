import { useEffect, useState, useTransition } from "react";
import { useParams } from "react-router-dom";
import Loader from "../UI/Loader";
import { getCountryIndData } from "../../api/postAPI";

const CountryDetails = () => {
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState([]);

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryIndData(params.id);

      if (res.status === 200) {
        setCountry(res.data);
      }
    });
  }, []);
  console.log(country);

  if (isPending) return <Loader />;

  return (
    <section className="card country-details-card container">
      <div className="container-card bg-white-box">
        {country.map((data) => {
          return (
            <div className="country-image grid grid-two-cols">
              <img src={data.flags.png} alt="Hey" className="flag" />

              <div className="country-content">
                <p className="card-title">{data.name.official}</p>

                <div className="infoContainer">
                  <p>
                    <span className="card-description">Native Names: </span>
                    {Object.keys(data.name.nativeName).map(
                      (key) => data.name.nativeName[key].commom,
                    )}
                  </p>
                  <p>
                    <span className="card-description">Capital: </span>
                    {data.capital}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CountryDetails;
