
function Users({data}) {
    return (
        <div className="App">
            {/* ternary operator {booolean ? if true : if false} */}
            {data.length > 0 ? (data.map((users) => {
                return (<div key={users.id} className="card custom-card"
                    style={{ width: "18rem", marginBottom: "20px" }}>
                    <div className="card-body">
                        <h5 className="card-title">{users.name}</h5>
                        <p className="card-text">
                            <b>Email:</b>
                            {users.email}
                            <br />
                            <b>Website:</b> {users.website}
                            <br />
                        </p>
                    </div>
                </div>
                );
            })
            ) : (
                <p className="text-center"> Loading data</p>
            )}
        </div>
    );
}

const url = "https://jsonplaceholder.typicode.com/users";

function App() {

    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        fetch(url)
            .then(Response => Response.json())
            .then(data => setUsers(data))
    }, []);

    return (<div>
        <h1>Fetching data from third party API</h1>
        <Users data={ users}/>
    </div>)
}


ReactDOM.render(<App />, document.getElementById("root"));