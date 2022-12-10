import React from 'react'

function Input() {

    const inputType = (type) => {
        switch (type) {
            default:
                return [
                    { type: 'text', id:'', name:'', placeholder:'', className:''},
                ];
            case 'number':
                return [
                    { type: 'number', id:'', name:'', placeholder:'', className:''},
                ];
            case 'date':
                return [
                    { type: 'date', id:'', name:'', placeholder:'', className:''},
                ];
            case 'email':
                return [
                    { type: 'email', id:'', name:'', placeholder:'', className:''},
                ];
            case 'password':
                return [
                    { type: 'password', id:'', name:'', placeholder:'', className:''},
                ];
            case 'textarea':
                return [
                    { type: 'textarea', id:'', name:'', placeholder:'', className:''},
                ];
            case 'select':
                return [
                    { type: 'select', id:'', name:'', placeholder:'', className:''},
                ];
            case 'checkbox':
                return [
                    { type: 'checkbox', id:'', name:'', placeholder:'', className:''},
                ];
            case 'radio':
                return [
                    { type: 'radio', id:'', name:'', placeholder:'', className:''},
                ];
        }
    }

  return (
    <>
    <input type={inputType} />
    </>
  )
}

export default Input