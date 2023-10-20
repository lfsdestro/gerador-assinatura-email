import React from 'react'
import { useInfoValue } from '../Contexts/InfoContext'

export const TemplateOne = () => {
	const { data } = useInfoValue()

	return (
		<table
			cellPadding="0"
			cellSpacing="0"
			style={{
				verticalAlign: '-webkit-baseline-middle',
				fontSize: 'medium',
				fontFamily: 'Arial',
			}}
		>
			<tbody>
				<tr>
					<td style={{ verticalAlign: 'top' }}>
						<table
							cellPadding="0"
							cellSpacing="0"
							style={{
								verticalAlign: '-webkit-baseline-middle',
								fontSize: 'medium',
								fontFamily: 'Arial',
							}}
						>
							<tbody>
								<tr>
									<td style={{ textAlign: 'center' }}>
										<img
											width="118"
											src={
												data.portrait ? data.portrait : 'https://news.bry.com.br/assinatura/icone-padrão.png'
													
											}
											alt="Foto"
											role="presentation"
											style={{ maxWidth: '200px', display: 'block' }}
										/>
									</td>
								</tr>
								{ data.logo && (
									<React.Fragment>
										<tr>
											<td height="24"></td>
										</tr>
										<tr>
											<td width="120px" style={{ textAlign: 'left' }}>
												
											</td>
										</tr>
									</React.Fragment>
								)}
								<tr>
									<td height="24"></td>
								</tr>
								
							</tbody>
						</table>
					</td>
					<td style={{ paddingLeft: '12px', verticalAlign: 'initial' }}>
						<h4
							color="#000000"
							style={{ margin: '0px', fontSize: '19px', color: '#299ddd' }}
						>
							<span>{data.firstName ? data.firstName : 'Nome'}</span>
							<span>&nbsp;</span>
							<span>{data.lastName ? data.lastName : 'Sobrenome'}</span>
						</h4>
						{data.jobTitle && (
							<p
								color="#000000"
								fontSize="medium"
								style={{
									margin: '5px 0px 0px 0px',
									color: '#787878',
									fontSize: '14px',
									lineHeight: '22px',
								}}
							>
								<span>{data.jobTitle}</span>
							</p>
						)}
						{(data.department || data.companyName) && (
							<p
								color="#000000"
								fontSize="medium"
								style={{
									margin: '0px',
									fontWeight: '500',
									color: 'rgb(0, 0, 0)',
									fontSize: '14px',
									lineHeight: '22px',
								}}
							>
								<span>{data.department}</span>
								{data.department &&
									(data.companyName && <span>&nbsp;|&nbsp;</span>)}
								<span>{data.companyName}</span>
							</p>
						)}
						<table
							cellPadding="0"
							cellSpacing="0"
							style={{
								verticalAlign: '-webkit-baseline-middle',
								fontSize: 'medium',
								fontFamily: 'Arial',
								width: '100%',
							}}
						>
							<tbody>
								
								<tr>
									<td
										height="1"
										color={data.accentColor}
										direction="horizontal"
										style={{
											width: '100%',
											borderLeft: 'none',
											display: 'block',
										}}
									></td>
								</tr>
								<tr>
									
								</tr>
							</tbody>
						</table>
						{(data.officePhone ||
							data.mobilePhone ||
							data.emailAddress ||
							data.websiteUrl ||
							data.address) && (
							<table
								cellPadding="0"
								cellSpacing="0"
								style={{
									verticalAlign: '-webkit-baseline-middle',
									fontSize: 'medium',
									fontFamily: 'Arial',
								}}
							>
								<tbody>
									{(data.officePhone || data.mobilePhone) && (
										<tr height="25" style={{ verticalAlign: 'middle' }}>
											
											<td style={{ padding: '0px', color: 'rgb(0, 0, 0)' }}>
												<a
													href={`tel:${data.officePhone}`}
													color="#000000"
													style={{
														textDecoration: 'none',
														color: 'rgb(120, 120, 120)',
														fontSize: '12px',
													}}
												>
													<span>{data.officePhone}</span>
												</a>
												{data.officePhone &&
													(data.mobilePhone && <span>&nbsp;|&nbsp;</span>)}
												<a
													href={`tel:${data.mobilePhone}`}
													color="#000000"
													style={{
														textDecoration: 'none',
														color: '#787878',
														fontSize: '12px',
													}}
												>
													<span>{data.mobilePhone}</span>
												</a>
											</td>
										</tr>
									)}
									{ data.logo && (
									<React.Fragment>
										
										<tr style={{ position: 'absolute', paddingTop: '4px' }}>
											<td style={{ textAlign: 'left' }}>
											<a
																		href={'https://www.bry.com.br'}
																		target='_blank'
																	
																	>
												<img
													width="220px"
													src={
														data.logo
															? data.logo
															: 'https://pngimage.net/wp-content/uploads/2018/06/logo-placeholder-png-3.png'
													}
													alt="Logo"
													role="presentation"
													style={{ maxWidth: '500px', display: 'block' }}
												/>
												</a>
											</td>
										</tr>
									</React.Fragment>
								)}{(data.socialFacebook ||
									data.socialInstagram ||
									data.socialLinkedin ||
									data.socialTwitter) && (
									<tr style={{ position: 'absolute', paddingTop: '33px' }}>
										<td style={{ textAlign: 'left' }}>
											<table
												cellPadding="0"
												cellSpacing="0"
												style={{
													verticalAlign: '-webkit-baseline-middle',
													fontSize: 'medium',
													fontFamily: 'Arial',
													display: 'inline-block',
												}}
											>
												<tbody>
													<tr style={{ textAlign: 'center' }}>
														{data.socialFacebook && (
															<React.Fragment>
																<td>
																	<a
																		href={`https://${data.socialFacebook}`}
																		target='_blank'
																		color={data.socialColor}
																		style={{
																			display: 'inline-block',
																			padding: '0px',
																			backgroundColor: data.socialColor,
																		}}
																	>
																		<img
																			src="https://news.bry.com.br/assinatura/face-icon.png"
																			alt="facebook"
																			color={data.socialColor}
																			style={{
																				backgroundColor: '#FFF',
																				maxWidth: '135px',
																				width: '15px',
																				display: 'block',
																			}}
																		/>
																	</a>
																</td>
																<td width="5"></td>
															</React.Fragment>
														)}
														{data.socialTwitter && (
															<React.Fragment>
																<td>
																	<a
																		href={`https://${data.socialTwitter}`}
																		target='_blank'
																		color={data.socialColor}
																		style={{
																			display: 'inline-block',
																			padding: '0px',
																			backgroundColor: data.socialColor,
																		}}
																	>
																		<img
																			src="https://news.bry.com.br/assinatura/yt-icon.png"
																			alt="youtube"
																			color={data.socialColor}
																			style={{
																				backgroundColor: '#FFF',
																				width: '15px',
																				maxWidth: '135px',
																				display: 'block',
																			}}
																		/>
																	</a>
																</td>
																<td width="5"></td>
															</React.Fragment>
														)}
														{data.socialLinkedin && (
															<React.Fragment>
																<td>
																	<a
																		href={`https://${data.socialLinkedin}`}
																		target='_blank'
																		color={data.socialColor}
																		style={{
																			display: 'inline-block',
																			padding: '0px',
																			backgroundColor: data.socialColor,
																		}}
																	>
																		<img
																			src="https://news.bry.com.br/assinatura/linkedin-icon.png"
																			alt="linkedin"
																			color={data.socialColor}
																			style={{
																				backgroundColor: '#FFF',
																				maxWidth: '135px',
																				width: '15px',
																				display: 'block',
																			}}
																		/>
																	</a>
																</td>
																<td width="5"></td>
															</React.Fragment>
														)}
														{data.socialInstagram && (
															<React.Fragment>
																<td>
																	<a
																		href={`https://${data.socialInstagram}`}
																		target='_blank'
																		color={data.socialColor}
																		style={{
																			display: 'inline-block',
																			padding: '0px',
																			backgroundColor: data.socialColor,
																		}}
																	>
																		<img
																			src="https://news.bry.com.br/assinatura/insta-icon.png"
																			alt="instagram"
																			color={data.socialColor}
																			style={{
																				backgroundColor: '#FFF',
																				maxWidth: '135px',
																				width: '15px',
																				display: 'block',
																			}}
																		/>
																	</a>
																</td>
																<td width="5"></td>
															</React.Fragment>
														)}
													</tr>
												</tbody>
											</table>
										</td>
									</tr>
								)}
									{data.websiteUrl && (
										<tr height="25" style={{ verticalAlign: 'middle' }}>
											<td width="30" style={{ verticalAlign: 'middle' }}>
												<table
													cellPadding="0"
													cellSpacing="0"
													style={{
														verticalAlign: '-webkit-baseline-middle',
														fontSize: 'medium',
														fontFamily: 'Arial',
													}}
												>
													<tbody>
														<tr>
															<td style={{ verticalAlign: 'bottom' }}>
																<span
																	color={data.accentColor}
																	style={{
																		display: 'block',
																		backgroundColor: data.accentColor,
																		width: '11px',
																	}}
																>
																	<img
																		src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon.png"
																		color={data.accentColor}
																		alt="Website URL icon"
																		style={{
																			width: '12px',
																			display: 'block',
																			backgroundColor: data.accentColor,
																		}}
																	/>
																</span>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
											<td style={{ padding: '0px' }}>
												<a
													href={`https://${data.websiteUrl}`}
													color="#000000"
													style={{
														textDecoration: 'none',
														color: 'rgb(0, 0, 0)',
														fontSize: '12px',
													}}
												>
													<span>{data.websiteUrl}</span>
												</a>
											</td>
										</tr>
									)}
									{data.address && (
										<tr height="25" style={{ verticalAlign: 'middle' }}>
											<td width="30" style={{ verticalAlign: 'middle' }}>
												<table
													cellPadding="0"
													cellSpacing="0"
													style={{
														verticalAlign: '-webkit-baseline-middle',
														fontSize: 'medium',
														fontFamily: 'Arial',
													}}
												>
													<tbody>
														<tr>
															<td style={{ verticalAlign: 'bottom' }}>
																<span
																	color={data.accentColor}
																	style={{
																		display: 'block',
																		backgroundColor: data.accentColor,
																		width: '11px',
																	}}
																>
																	<img
																		src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/address-icon.png"
																		color={data.accentColor}
																		alt="Address icon"
																		style={{
																			width: '12px',
																			display: 'block',
																			backgroundColor: '#007bff',
																		}}
																	/>
																</span>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
											<td style={{ padding: '0px' }}>
												<span
													color="#000000"
													style={{ fontSize: '12px', color: 'rgb(0, 0, 0)' }}
												>
													<span>{data.address}</span>
												</span>
											</td>
										</tr>
									)}
								</tbody>
							</table>
						)}
						<table
							cellPadding="0"
							cellSpacing="0"
							style={{
								verticalAlign: '-webkit-baseline-middle',
								fontSize: 'medium',
								fontFamily: 'Arial',
							}}
						>
							<tbody>
								<tr>
									<td height="16"></td>
								</tr>
							</tbody>
						</table>
						<table
							cellPadding="0"
							cellSpacing="0"
							style={{
								verticalAlign: '-webkit-baseline-middle',
								fontSize: 'medium',
								fontFamily: 'Arial',
							}}
						>
							<tbody>
								<tr>
									<td height="24"></td>
								</tr>
							</tbody>
						</table>
					</td>
				</tr>
			</tbody>
		</table>
	)
}