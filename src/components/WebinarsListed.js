import React, { useEffect } from "react";
import { fetchAllWebinars } from "../store/slices/webinars";
import { useDispatch, useSelector } from "react-redux";

const WebinarsListed = () => {
  const { list } = useSelector((state) => state.webinars);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllWebinars());
  }, [dispatch]);

  return (
    <div>
      {Object.values(list).map((webinar, id) => (
        <div key={id}>
          <div className="card">
            <img src={webinar.lang?.en.banner} alt="Promotional Banner" />
            <div className="card_body">
              <h1 className="card_title">{webinar.lang?.es.title}</h1>
              <h2 className="card_name">
                {webinar.speakers?.map((e, id_name) => (
                  <p key={id_name}>{e.name}</p>
                ))}
              </h2>
              <div className="card_text">
                {webinar.speakers?.map((e, id_speaker) => (
                  <p key={id_speaker}>{e.lang?.es.description}</p>
                ))}
              </div>
              <h3 className="card_speakers">
                {webinar.speakers?.map((e, id_comp) => (
                  <p key={id_comp}>{e.company}</p>
                ))}
              </h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WebinarsListed;
