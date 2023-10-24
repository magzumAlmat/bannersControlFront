export default function Home() {




    return(
        <div className='container'>
            <h1>
                Баннеры
            </h1>
            <div className="container-fluid">
                <div className="container mt-5 border">
                    <div className="row p-3">
                        <div className="col-sm-4">
                            <img  height='100%' width='100%' src="https://alakt-photos-kl.kcdn.kz/webp/91/912cc872-ca84-438a-9cf0-9a69ffcfc884/17-750x470.webp" alt="alt banner"/>
                        </div>
                        <div className="col-sm-8">
                            <h1>Banner title place</h1>
                            <p className='mt-5'>Banner number:</p>
                            <p>Banner address: </p>
                            <p>Banner unique id: </p>
                            <p>Banner company name: </p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}