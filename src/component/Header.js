import "../style/Header.css"
export default function Header(){
    return (
        <div className="Akki">
        <div className="box">
            <div className="createA">
              <div className="ca">Create Account</div>
            </div>
                <div className="email">
                    <input type= "email" placeholder="Email" className="emailhw"></input>
                </div>
                <div className="password">
                    <input type= "password" placeholder="Password" className="passwordhw"></input>
                </div>
                <div className="country">
                    <input type= "country" placeholder="Country" className="countryhw"></input>
                </div>
                
                <div className="term">
                    
                   <span className="term1"><input type= "checkbox" className="hw"></input></span>
                   <span className="term2">I accept the terms of service</span> 
                   
                </div>
                <div className="smt">
                <div className="submit">Submit</div>
                </div>
                
                
            
        </div>
        </div>
    )
}