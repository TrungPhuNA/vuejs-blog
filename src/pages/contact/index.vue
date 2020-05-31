<template>
    <div class="contact">
        <form action="" @submit.prevent="validateBeforeSubmit">
            <div class="form-group">
                <label for="name">Name <span class="cRed">(*)</span></label>
                <input name="name" v-model="emtry.name" id="name" type="text" class="form-control" placeholder="Nhập name">
            </div>

            <div class="form-group">
                <label for="email">Email <span class="cRed">(*)</span></label>
                <input name="email"  v-validate="'required|email'" v-model="emtry.email" id="email" type="email" class="form-control" placeholder="Nhập email">
            </div>

            <div class="form-group">
                <label for="phone">Phone <span class="cRed">(*)</span></label>
                <input name="phone" id="phone" v-model="emtry.phone" type="number" class="form-control" placeholder="Nhập số điện thoại">
            </div>
            <div class="form-group">
                <label for="content">Nội dung <span class="cRed">(*)</span></label>
                <textarea class="form-control"  name="content" placeholder="Nội dung ..." v-model="emtry.content"></textarea>
            </div>
            <div class="form-group">
                <a href="#" @click="saveContact" class="btn">Gủi yêu cầu</a>
            </div>
        </form>
    </div>
</template>

<script>

    import { email, required } from 'vuelidate/lib/validators';
    import formMixin from './../../mixins/form';
    import axios from "axios";


    export default {
        components : {

        },
        mixins: [ formMixin],
        validations: {
            email: {
                required,
                email,
            },
        },
        data() {
            return {
                emtry : {
                    name : '',
                    email : '',
                    phone : '',
                    content : ''
                }
            }
        },
        methods : {
            validateBeforeSubmit() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        // eslint-disable-next-line
                        alert('Form Submitted!');
                        return;
                    }

                    alert('Correct them errors!');
                });
            },

             saveContact() {
                let data = this.emtry;

                 axios.post('http://127.0.0.1:1999/api/contacts', {
                    data
                })
                .then(function (response) {
                    console.log(response);
                    alert("OK");
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    .form-group {
        margin-bottom: 20px;
        > label {
            font-weight: 600;
            display: inline-block;
            max-width: 100%;
            margin-bottom: 5px;
            margin-right: 10px;
            font-size: 14px;
            color: #333;
            a {
                margin: 0 10px;
            }
            > span {
                color: #FF0000
            }
            &.count-down {
                width: 100%;
                .count-number{
                    float: right;
                    font-weight: 400;
                    color: #888;
                }
            }
        }
        .form-control {
            border-radius: 2px;
            display: block;
            font-size: 14px;
            box-sizing: border-box;
            padding: 8px;
            height: 38px;
            width: 100%;
            background: #fff;
        }
        .intro{
            color: #888;
            font-style: italic;
            font-size: 13px;
        }
    }

    .form-control:disabled, .form-control[readonly] {
        background-color: #f2f2f2;
        opacity: 0.5;
    }

    .form-control:focus, input[type=text]:focus, input[type=password]:focus {
        border: 2px solid #d4d4d4;
        outline: none;
        box-shadow: none;
    }

    button, input, textarea {
        outline: 0;
    }

    /* Basic styles for button */
    *:focus, input, button:focus, textarea:focus, input:focus {
        outline: none !important;
    }

    select {
        height: 38px;
    }

    textarea, input, select {
        border: 2px solid #f2f2f2;
        font-size: 14px;
        padding: 10px;
    }

    textarea {
        min-height: 150px;
    }
</style>