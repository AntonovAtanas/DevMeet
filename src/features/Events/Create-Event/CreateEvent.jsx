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
            <form onSubmit={(e) => handleSubmit(e, 'create')}>
                {/* event title */}
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
                        The title must be between 4-60 characters!
                    </span>
                )}

                {/* image url */}
                <div className="input-wrapper">
                    <i
                        className="fa-solid fa-image"
                        style={{ color: '#28587B' }}
                    ></i>
                    <input
                        type="text"
                        name="imageUrl"
                        placeholder="Image Url..."
                        className={
                            isInputBlurred.imageUrl && !isFormValid.imageUrl
                                ? 'default-input error-input'
                                : 'default-input'
                        }
                        value={formValues.imageUrl}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                    />
                </div>
                {!isFormValid.imageUrl && isInputBlurred.imageUrl && (
                    <span className="error-message">Invalid image url!</span>
                )}

                {/* location */}
                <div className="input-wrapper">
                    <i
                        className="fa-solid fa-location-dot"
                        style={{ color: '#28587B' }}
                    ></i>
                    <input
                        type="text"
                        name="location"
                        placeholder="Address, City"
                        className={
                            isInputBlurred.location && !isFormValid.location
                                ? 'default-input error-input'
                                : 'default-input'
                        }
                        value={formValues.location}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                    />
                </div>
                {!isFormValid.location && isInputBlurred.location && (
                    <span className="error-message">
                        Location must include address and city separated by a
                        comma!
                    </span>
                )}

                {/* date */}
                <div className="input-wrapper">
                    <i
                        className="fa-solid fa-calendar"
                        style={{ color: '#28587B' }}
                    ></i>
                    <input
                        type="date"
                        name="date"
                        placeholder="Event date..."
                        className={
                            isInputBlurred.date && !isFormValid.date
                                ? 'default-input error-input'
                                : 'default-input'
                        }
                        style={{ color: formValues.date ? 'black' : '#757575' }}
                        value={formValues.date}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                    />
                </div>
                {!isFormValid.date && isInputBlurred.date && (
                    <span className="error-message">
                        Please select an event date
                    </span>
                )}

                {/* ticket price */}
                <div className="input-wrapper">
                    <i
                        className="fa-solid fa-ticket"
                        style={{ color: '#28587B' }}
                    ></i>
                    <input
                        type="number"
                        name="ticketPrice"
                        placeholder="Ticket price..."
                        className={
                            isInputBlurred.ticketPrice &&
                            !isFormValid.ticketPrice
                                ? 'default-input error-input'
                                : 'default-input'
                        }
                        value={formValues.ticketPrice}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                    />
                </div>
                {!isFormValid.ticketPrice && isInputBlurred.ticketPrice && (
                    <span className="error-message">
                        Ticket price is required!
                    </span>
                )}

                {/* capacity */}
                <div className="input-wrapper">
                    <i
                        className="fa-solid fa-user-group"
                        style={{ color: '#28587B' }}
                    ></i>
                    <input
                        type="number"
                        name="capacity"
                        placeholder="Hall capacity..."
                        className={
                            isInputBlurred.capacity && !isFormValid.capacity
                                ? 'default-input error-input'
                                : 'default-input'
                        }
                        value={formValues.capacity}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                    />
                </div>
                {!isFormValid.capacity && isInputBlurred.capacity && (
                    <span className="error-message">
                        Hall capacity is invalid!
                    </span>
                )}

                {/* description */}
                <div className="input-wrapper">
                    <i
                        className="fa-solid fa-check"
                        style={{ color: '#28587B' }}
                    ></i>
                    <textarea
                        type="text"
                        name="description"
                        placeholder="Event description..."
                        className={
                            isInputBlurred.description &&
                            !isFormValid.description
                                ? 'default-input error-input'
                                : 'default-input'
                        }
                        value={formValues.description}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                    />
                </div>
                {!isFormValid.description && isInputBlurred.description && (
                    <span className="error-message">
                        The description must be between 20 and 500 characters!
                    </span>
                )}

                {/* submit form button */}
                <button
                    className="button-main auth-button"
                    disabled={
                        !isFormValid.title ||
                        !isFormValid.imageUrl ||
                        !isFormValid.ticketPrice ||
                        !isFormValid.capacity ||
                        !isFormValid.description ||
                        !isFormValid.date ||
                        !isFormValid.location
                    }
                >
                    Create an event
                </button>
            </form>
        </div>
    );
}
