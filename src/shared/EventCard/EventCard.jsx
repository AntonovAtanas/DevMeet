import './eventCard.css';

export default function EventCard() {
    return (
        <div className="event-card">
            <span>
                <img
                    src="https://secure.meetupstatic.com/photos/event/1/b/8/5/600_517027045.webp?w=384"
                    alt=""
                />
            </span>
            <h3>How does the QA role fit into an engineering team?</h3>
            <span>
                <i
                    class="fa-solid fa-location-dot"
                    style={{ color: '#cfcfcf' }}
                ></i>
                <p>John Atanasoff Forum, Sofia Tech Park</p>
            </span>
            <span>
                <i
                    class="fa-regular fa-calendar"
                    style={{ color: '#cfcfcf' }}
                ></i>
                <p>Wednesday, Noveber 22</p>
            </span>
            <div>
                <span>
                    <i
                        class="fa-solid fa-check"
                        style={{ color: '#cfcfcf' }}
                    ></i>
                    <p>53 going</p>
                </span>
                <span>
                    <i
                        class="fa-solid fa-ticket"
                        style={{ color: '#cfcfcf' }}
                    ></i>
                    <p>FREE</p>
                </span>
            </div>
        </div>
    );
}
