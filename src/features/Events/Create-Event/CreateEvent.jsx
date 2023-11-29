import useEvent from '../useEvent';

export default function CreateEvent() {
    const {
        formValues,
        handleInputChange,
        handleSubmit,
        isFormValid,
        handleInputBlur,
        isInputBlurred,
    } = useEvent({
        title: '',
        description: '',
        ticketPrice: '',
        capacity: '',
        location: '',
        imageUrl: '',
        date: '',
    });

    return (
        <div className="add-event-wrapper">
            <h1>Add an Event</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="input-wrapper">
                    <i
                        className="fa-solid fa-check"
                        style={{ color: '#28587B' }}
                    ></i>
                    <input
                        type="text"
                        name="title"
                        placeholder="Event title..."
                        className={
                            isInputBlurred.title && !isFormValid.title
                                ? 'default-input error-input'
                                : 'default-input'
                        }
                        value={formValues.title}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                    />
                </div>
                {!isFormValid.title && isInputBlurred.title && (
                    <span className="error-message">
                        The title must be between 4-30 characters
                    </span>
                )}

                <button
                    className="button-main auth-button"
                    disabled={!isFormValid.title}
                >
                    Register
                </button>
            </form>
        </div>
    );
}
