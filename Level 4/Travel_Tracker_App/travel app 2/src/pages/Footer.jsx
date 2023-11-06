// This Footer will provide company logo

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShop } from "@fortawesome/free-solid-svg-icons"

function Footer() {
  return (
    <footer className="footer">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="copyright">
                        <p>Copyright &copy; 2023 JamesMart</p>
                        <FontAwesomeIcon icon= {faShop } /> 
                        
                    </div>
                </div>
            </div>
        </div>
        </footer>
    )
}


export default Footer
