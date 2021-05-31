import React from 'react'
import  './Profil.css';
import PropTypes from 'prop-types';


const Profil = (props) => {

    const{
        fullName,
        bio,
        profession,
        children,
        handleAlert,
    } = props;
    
    return (
    
    <div class="container-fluid">
	<div class="row">
		<div class="col-md-6">
            <div className="image">{children}</div>
		</div>
		<div class="col-md-6">
			<div class="row">
				<div class="col-md-12">
                    <p className="fullname" > Hi ! my name is {fullName}</p>
                    <br />
                    <p className="bio">  {bio}</p> 
                    <br />
                    <p className="profession"> I am a <span>{profession}</span></p>

				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
                <div id="btn" onClick={() => handleAlert(` i am ` +fullName)}><span class="noselect">Click me</span><div id="circle"></div></div>
				   
                </div>    
			</div>
		</div>
	</div>
</div>
    
    )
}

 //PropTypes
Profil.propTypes = {
  user: PropTypes.shape({
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleAlert: PropTypes.func.isRequired,
  }),
  
};
// Default Props
Profil.defaultProps = {
  name: "undifiend",
  bio: "bio",
  profession: "none",
};

export default Profil
