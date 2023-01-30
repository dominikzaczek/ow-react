export default function Layout({children}){
return <div className="App">
            <header className="App-header">
                <div className="container">
                    {children}
                </div>
            </header>
        </div>
}