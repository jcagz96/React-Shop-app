import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './styles.css';
import { Link, useHistory } from 'react-router-dom';
import { StoreState } from '../../store/createStore';
import { signInRequest } from '../../store/modules/auth/actions';
import { addCarItem } from '../../store/modules/car/actions';

//

const Login = () => {

    const history = useHistory();
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const { loadingSignInRequest, isSignedIn, error, username, token } = useSelector((state : StoreState )=> state.auth)
    const { carElements } = useSelector((state : StoreState )=> state.car)
    const dispatch = useDispatch();

    console.log("o componente foi renderizado");
    console.log("LOAGING: " +  loadingSignInRequest)
    console.log("SIGNEDIN: " +  isSignedIn)
    console.log("Error: " +  error)
    console.log("username: " +  username)
    console.log("token: " +  String(token))

    /*
    useEffect(()=>{
        if(isSignedIn){
            history.push('/create-point');
        }
    },[isSignedIn])
    */

    async function handleLogin(e:any){
        e.preventDefault();
        dispatch(signInRequest({email: user, password: password}, history)); 
    }

    return (
        <div id="page-home">
            <div className="content">

                <main>
                    <h1>{String(loadingSignInRequest)} |Seu marketplace de recolha de residuos | {user}</h1>
                    <p>Ajudamos pessoas a encontrarem pontos de recolha de forma eficiente | {password}</p>
                    

                    <input
                        placeholder="User"
                        value={user}
                        onChange={e => setUser(e.target.value)}
                    />
                    <input
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Link to="/create-point">
                        <strong>
                            Registe um ponto de recolha
                    </strong>
                    
                    </Link>
                    <button onClick={handleLogin}>
                    CLICKA
                    </button>
                </main>


            </div>
        </div>
    );
}

export default Login;