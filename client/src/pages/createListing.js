import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from '@apollo/client'
import { ADD_LISTING } from '../utils/mutations'
import Auth from '../utils/auth'
 

function createListing() {
    const [formData, setFormData] = useState({
        title: 'title',
        photo: 'photo',
        category: 'category',
        price: 'price',
        condition: 'condition',
        description: 'description'
    })
    let navigate = useNavigate();

    const [addListing, { error }] = useMutation(ADD_LISTING);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addListing({
                variables: { ...formData },
            });

            if(!data) {
                console.log({ error } + 'Error adding listing')
            }

            navigate(`/listing/${data.addListing._id}`);
        } catch(err) {
            console.log(err)
        }

        setFormData({
        title: 'title',
        photo: 'photo',
        category: 'category',
        price: 'price',
        condition: 'condition',
        description: 'description'
        })
    }


    return (
        <form onSubmit={handleFormSubmit()}>
            <div className='card'>
                <div className='titleField'>
                    <label for='title'>Title</label>
                    <input class='title' id='listingTitle' name='title' onChange={handleInputChange()}></input>
                </div>
                <div className='photoUpload'>
                    <label for='photo'>Add a Photo</label>
                    <input
                        type='text'
                        id='photo'
                        name='photo'
                        onChange={handleInputChange()}
                    >
                    </input>
                </div>
            </div>
            <div className='card'>
                <div className='categorySelect'>
                    <label for='category'>Category</label>
                    <select class='category' id='listingCategory' name='category' onChange={handleInputChange()}>
                        <option value="" disabled selected>Select category</option>
                        <option value='antiques'>Antiques</option>
                        <option value=''></option>
                        <option value=''></option>
                        <option value=''></option>
                        <option value=''></option>
                        <option value=''></option>
                        <option value=''></option>
                    </select>
                </div>
                <div className='priceField'>
                    <label for='price'>Price</label>
                    <input className='price' id='listingPrice' name='price' onChange={handleInputChange()}>$0.00</input>
                </div>
                <div className='conditionSelect'>
                    <label for='condition'>Condition</label>
                    <select class='condition' id='listingCategory' name='condition' onChange={handleInputChange()}>
                        <option value="" disabled selected>Select condition</option>
                        <option value='mint'>Mint</option>
                        <option value='excellent'>Excellent</option>
                        <option value='good'>Good</option>
                        <option value='fair'>Fair</option>
                        <option value='poor'>Poor</option>
                    </select>
                </div>
                <div className='descriptionField'>
                    <label for='description'>Description</label>
                    <textarea className='description' id='listingDescription' name='description' onChange={handleInputChange()}></textarea>
                </div>
            </div>
        </form>
    )
}

export default createListing