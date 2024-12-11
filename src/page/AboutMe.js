import React from 'react';
import {useParams,useLocation,useSearchParams} from 'react-router-dom';


const AboutMe = ({data}) => {
    const params=useParams();
    const location=useLocation();
    const [serchParams,setSerchParams]=useSearchParams();
    const detail = serchParams.get("detail");
    const profile=data[params.username]
    const state = location.state || {};

    return (
        <div>
            {profile ?(
                <div>
                    <h2>{profile.name}</h2>
                    <h2>{profile.description}</h2>
                </div>)
                : (
                    <>
                    <h2>쿼리스트링 : {location.search}</h2>
                    <h2>쿼리스트링 : {location.pathname}</h2>
                    <h2>쿼리스트링 : {location.key}</h2>
                    <h2>쿼리스트링 : {state.age}</h2>
                    <h2>파라미터 : {detail}</h2>
                    </>
                )}

        </div>
    );
};

export default AboutMe;