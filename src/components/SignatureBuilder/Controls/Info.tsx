import React from 'react'
import styled from 'styled-components'
import { useInfoValue } from '../../Contexts/InfoContext'
import { InputText } from '../../Common/InputText'
import { Accordion } from '../../Common/Accordion'
import { inputList } from '../../Common/InputList'
import { Description } from '../../Common/Description'

export const Info = () => {
	const { data, updateInfo } = useInfoValue()

	return (
		<StyledInfo>
		
        <Description>Siga os passos para gerar sua assinatura.</Description>
        <ol style={{ fontSize: '14px' }}>
          <li>
		  	Primeiro você precisa obter uma foto de perfil em conformidade com as diretrizes de marca da BRy.
          </li>
		  <br />
          <li>
		  	Envie a foto para o endereço mktdev@bry.com.br e aguarde a aprovação. Após a aprovação, você receberá um e-mail de notificação com instruções adicionais. <a style={{ fontSize: '11px', color: 'white', textDecoration: 'none' }} href='https://brytec.atlassian.net/wiki/spaces/DSYS/pages/166428675/Assinatura+de+e-mail+Marca+ATUAL+Antiga' target='_blank'><b>Acesse a documentação</b></a>
		  </li>
		  <br />
		  <li>
			Caso você tenha tirado a foto junto ao time de RH durante seu onboarding, ignore os passos 1 e 2.
		  </li>
		  <br />
          <li>
		  	No e-mail de notificação, você encontrará seu username geral da BRy. Insira a chave 'username' no campo 'foto' do formulário abaixo.
          </li>
		  <br />
		  <li>
		  	Complete o restante do formulário com seus dados. Preste atenção ao campo 'cargo', que deve ser alinhado com seu líder e seguir as normas da BRy.
          </li>
		  <br />
		  <li>
		  	Após preencher todos os campos, sua assinatura estará pronta. Agora, basta copiar o código HTML clicando no botão 'código HTML' e configurá-lo em seu provedor de e-mail.
          </li>
		  <br />
        </ol>
		<Description>Obrigado por escolher a BRy :)</Description>
		
			
			{inputList.default.map(input => (
				<InputText
					label={input.label}
					name={input.name}
					value={data[input.name]}
					onBlur={updateInfo}
					key={input.name}
				/>
			))}
			<Accordion title="Informação de Contato">
				{inputList.contact.map(input => (
					<InputText
						label={input.label}
						name={input.name}
						value={data[input.name]}
						onBlur={updateInfo}
						key={input.name}
					/>
				))}
			</Accordion>
			
		</StyledInfo>
	)
}

const StyledInfo = styled.div`
	display: flex;
	flex-direction: column;
	animation: flipdown 0.2s ease both;
`
