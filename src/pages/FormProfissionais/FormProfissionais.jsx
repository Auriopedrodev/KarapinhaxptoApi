import React from 'react';
import '../FormProfissionais/FormProfissionais.css';

export default function FormProfissionais() {
    return (
        <div>
            <div className="modal modal-sheet position-static d-block bg-body-dark p-4 py-md-5" tabindex="-1" role="dialog" id="modalSignin">
                <div className="modal-dialog" role="document">
                    <div className="modal-content rounded-4 shadow">
                        <div className="modal-header p-5 pb-4 border-bottom-0">
                            <h1 className="fw-bold mb-0 fs-2">KARAPINHA XPTO</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body p-5 pt-0">
                            <form className="">
                                <div className="form-floating mb-3">
                                    <input type="Username" className="form-control border-dark rounded-3" id="floatingInput" placeholder="@danielXPTO..."/>
                                        <label for="floatingInput">Username</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control border-dark rounded-3" id="floatingPassword" placeholder="Password"/>
                                        <label for="floatingPassword">Password</label>
                                </div>
                                <button className="w-100 mb-2 btn btn-lg rounded-3 btn-dark" type="submit">Sign up</button>
                                <small className="text-body-secondary">Esqueceu a sua palavra passe?</small>
                                <hr className="my-4 "/>
                                <section className="ContainerCriarConta">
                                       <h2 className="fs-5 fw-bold mb-2">Não possui uma conta? </h2>
                                    <button className="w-50 py-2 mb-3 btn btn-outline-dark rounded-3" type="submit">
                                        Criar Conta 
                                    </button>  
                                </section>     
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
