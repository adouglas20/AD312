import './ShoppingListWithImmer.css';
import { useImmer } from 'use-immer';
import { useRef } from 'react';
import { useState } from 'react';
function ShoppingListWithImmer() {
    const [shoppingList, setShoppingList] = useImmer([]);
    const [errorMessage, setErrorMessage] = useState('');
    const nameRef = useRef(null);
    const quantityRef = useRef(null);
    const categoryRef = useRef(null);
    const notesRef = useRef(null);
    function handleSubmit(event) {
        event.preventDefault();
        if (
            event.target.elements.name.value.trim() &&
            event.target.elements.quantity.value > 0
        ) {
            addItem({
                id: crypto.randomUUID(),
                name: event.target.elements.name.value,
                quantity: event.target.elements.quantity.value,
                details: {
                    category: event.target.elements.category.value,
                    notes: event.target.elements.notes.value,
                },
            });
            event.target.elements.name.value = '';
            event.target.elements.quantity.value = '';
            event.target.elements.category.value = '';
            event.target.elements.notes.value = '';
        }
    }
    function addItem(item) {
        setShoppingList((draft) => {
            draft.push(item);
        });
    }

    function updateItem(
        id,
        name = null,
        quantity = null,
        category = null,
        notes = null,
    ) {
        if (quantity != '') {
            quantity = Number(quantity.trim());
            if (isNaN(quantity)) {
                setErrorMessage('Invalid quantity');
                quantity = null;
            }
        }

        if (typeof quantity === 'number' && quantity <= 0) {
            setErrorMessage('');
            removeItem(id);
        } else {
            setShoppingList((draft) => {
                const item = draft.find((element) => element.id === id);
                setErrorMessage('');

                if (category != null && category != '') {
                    item.details.category = category;
                }
                if (notes != null && notes != '') {
                    item.details.notes = notes;
                }
                if (name != null && name != '') {
                    item.name = name;
                }
                if (quantity != null && quantity != '') {
                    item.quantity = quantity;
                }
            });
        }
        nameRef.current.value = '';
        quantityRef.current.value = '';
        categoryRef.current.value = '';
        notesRef.current.value = '';
    }

    function removeItem(id) {
        setShoppingList((draft) => {
            return draft.filter((item) => {
                return item.id != id;
            });
        });
    }

    const listItems = shoppingList.map((item) => {
        return (
            <li key={item.id}>
                {/* <b>ID:</b> {item.id} */}
                <b>Name:</b> {item.name} <b>Qty:</b> {item.quantity}{' '}
                <b>Category:</b> {item.details.category} <b>Notes:</b>{' '}
                {item.details.notes}
                <button
                    className="control-button"
                    type="button"
                    onClick={() =>
                        updateItem(
                            item.id,
                            nameRef.current.value,
                            quantityRef.current.value,
                            categoryRef.current.value,
                            notesRef.current.value,
                        )
                    }
                >
                    Update Item
                </button>
                <button
                    className="remove-button"
                    onClick={() => removeItem(item.id)}
                >
                    Delete
                </button>
            </li>
        );
    });
    return (
        <div>
            {errorMessage && <p>{errorMessage}</p>}
            <form className="form" method="post" onSubmit={handleSubmit}>
                <ul>{listItems}</ul>
                <div>
                    <label className="bold-label"> Name: </label>{' '}
                    <input className="input-box" ref={nameRef} name="name" />
                    <label className="bold-label"> Qty: </label>{' '}
                    <input
                        className="input-box-number"
                        ref={quantityRef}
                        name="quantity"
                    />
                    <label className="bold-label"> Category: </label>{' '}
                    <input
                        className="input-box"
                        ref={categoryRef}
                        name="category"
                    />
                    <label className="bold-label"> Notes: </label>{' '}
                    <input className="input-box" ref={notesRef} name="notes" />
                </div>
                <button className="control-button" type="submit">
                    Add Item
                </button>
            </form>
        </div>
    );
}

export default ShoppingListWithImmer;
