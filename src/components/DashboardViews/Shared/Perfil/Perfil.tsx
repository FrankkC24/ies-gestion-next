'use client';

import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Estilos básicos para ReactDatePicker
import {
  PerfilContainer,
  PerfilHeader,
  FormContainer,
  InputGroup,
  Label,
  Input,
  Select,
  PasswordSection,
  Button,
  ButtonGroup,
  CustomDatePickerWrapper,
  SuccessMessage,
} from './Perfil.styles';

// Este componente puede ser compartido entre los diferentes roles (alumno, docente, coordinador)
const Perfil: React.FC = () => {
  const [isChangingPassword, setIsChangingPassword] = useState<boolean>(false);
  const [birthDate, setBirthDate] = useState<Date | null>(new Date('2004-11-05'));
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    domicilio: '',
    provincia: 'entre-rios',
    localidad: '',
    telefono: '',
    celular: '',
    correo: '',
    estadoCivil: 'soltero',
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleTogglePasswordChange = () => {
    setIsChangingPassword(!isChangingPassword);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Aquí iría la lógica de envío al backend cuando lo tengas listo
    console.log('Datos a enviar:', {
      ...formData,
      birthDate,
    });
    
    // Mostrar mensaje de éxito
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);

    // Si estaba cambiando la contraseña, cerrar esa sección
    if (isChangingPassword) {
      setIsChangingPassword(false);
      // Limpiar campos de contraseña
      setFormData({
        ...formData,
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
    }
  };

  // Verificamos si las contraseñas no coinciden y hay valores en ambos campos
  const passwordsMismatch: boolean = 
    Boolean(formData.newPassword) && 
    Boolean(formData.confirmPassword) && 
    formData.newPassword !== formData.confirmPassword;

  return (
    <PerfilContainer>
      <PerfilHeader>MODIFICAR DATOS PERSONALES</PerfilHeader>
      <FormContainer onSubmit={handleSubmit}>
        <InputGroup>
          <Label>FECHA DE NACIMIENTO</Label>
          <CustomDatePickerWrapper>
            <ReactDatePicker
              selected={birthDate}
              onChange={(date) => setBirthDate(date)}
              dateFormat="dd / MM / yyyy"
              className="custom-datepicker-input"
              popperClassName="custom-datepicker-popper"
            />
          </CustomDatePickerWrapper>
        </InputGroup>
        <InputGroup>
          <Label>DOMICILIO</Label>
          <Input 
            type="text" 
            name="domicilio"
            value={formData.domicilio}
            onChange={handleInputChange}
            placeholder="Ejemplo: Calle Falsa 123" 
          />
        </InputGroup>
        <InputGroup>
          <Label>PROVINCIA</Label>
          <Select
            name="provincia"
            value={formData.provincia}
            onChange={handleInputChange}
          >
            <option value="entre-rios">Entre Ríos</option>
            <option value="cordoba">Córdoba</option>
            <option value="buenos-aires">Buenos Aires</option>
            <option value="santa-fe">Santa Fe</option>
            <option value="corrientes">Corrientes</option>
          </Select>
        </InputGroup>
        <InputGroup>
          <Label>LOCALIDAD</Label>
          <Input 
            type="text" 
            name="localidad"
            value={formData.localidad}
            onChange={handleInputChange}
            placeholder="Ejemplo: Paraná" 
          />
        </InputGroup>
        <InputGroup>
          <Label>TELÉFONO</Label>
          <Input 
            type="text" 
            name="telefono"
            value={formData.telefono}
            onChange={handleInputChange}
            placeholder="Ejemplo: 0343 1234567" 
          />
        </InputGroup>
        <InputGroup>
          <Label>CELULAR</Label>
          <Input 
            type="text" 
            name="celular"
            value={formData.celular}
            onChange={handleInputChange}
            placeholder="Ejemplo: 0343 7654321" 
          />
        </InputGroup>
        <InputGroup>
          <Label>CORREO</Label>
          <Input 
            type="email" 
            name="correo"
            value={formData.correo}
            onChange={handleInputChange}
            placeholder="ejemplo@correo.com" 
          />
        </InputGroup>
        <InputGroup>
          <Label>ESTADO CIVIL</Label>
          <Select
            name="estadoCivil"
            value={formData.estadoCivil}
            onChange={handleInputChange}
          >
            <option value="soltero">Soltero</option>
            <option value="casado">Casado</option>
            <option value="divorciado">Divorciado</option>
            <option value="viudo">Viudo</option>
          </Select>
        </InputGroup>
        <PasswordSection>
          {!isChangingPassword && (
            <Button type="button" onClick={handleTogglePasswordChange}>
              CAMBIAR CONTRASEÑA
            </Button>
          )}
          {isChangingPassword && (
            <>
              <InputGroup>
                <Label>CONTRASEÑA ANTERIOR</Label>
                <Input
                  type="password"
                  name="oldPassword"
                  value={formData.oldPassword}
                  onChange={handleInputChange}
                  placeholder="Introduce tu contraseña anterior"
                />
              </InputGroup>
              <InputGroup>
                <Label>NUEVA CONTRASEÑA</Label>
                <Input
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  placeholder="Introduce tu nueva contraseña"
                />
              </InputGroup>
              <InputGroup>
                <Label>CONFIRMAR CONTRASEÑA</Label>
                <Input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirma tu nueva contraseña"
                />
                {passwordsMismatch && (
                  <span style={{ color: 'red', marginTop: '5px', fontSize: '0.9rem' }}>
                    Las contraseñas no coinciden
                  </span>
                )}
              </InputGroup>
              <ButtonGroup>
                <Button type="button" onClick={handleTogglePasswordChange}>
                  CANCELAR
                </Button>
                <Button 
                  type="submit" 
                  disabled={passwordsMismatch}
                >
                  GUARDAR
                </Button>
              </ButtonGroup>
            </>
          )}
        </PasswordSection>
        {!isChangingPassword && <Button type="submit">GUARDAR</Button>}
        
        {showSuccess && (
          <SuccessMessage>
            ¡Datos actualizados correctamente!
          </SuccessMessage>
        )}
      </FormContainer>
    </PerfilContainer>
  );
};

export default Perfil;