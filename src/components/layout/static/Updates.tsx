import updates from '../json/updates.json';

const Updates = () => {
    return (
        <main className="main-container">

            <div className="list updates">

                {

                    updates.slice(0).reverse().map((update, idx: number) => (
                        <div key={idx} className="el update">
                            <div className="update-header flex-between align-end">
                                <h2 className="update-title">{update.title}</h2>
                                <p className="date">{update.date}</p>
                            </div>

                            <ul className="changelog">
                                {
                                    update.changes.map((change: string) => (
                                        <li>{change}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))

                }

            </div>

        </main>
    )
}

export default Updates
