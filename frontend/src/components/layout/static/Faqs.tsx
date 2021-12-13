import faqs from '../json/faqs.json';

const Faqs = () => {
    return (
    <main className='main-container'>
        <h1 className="faqs-title upper">Faqs</h1>

        <div className="list faqs">

            {
                faqs.map((faq, idx: number) => (
                    <div className="el faq">
                        <h2 className="q-title">{idx + 1}) {faq.title}</h2>
                        <p className="a">{faq.ans}</p>
                    </div>
                ))
            }

        </div>
    </main>
    )
}

export default Faqs
