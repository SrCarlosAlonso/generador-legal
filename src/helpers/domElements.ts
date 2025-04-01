export const $ = (id: string) => {
  const el = document.getElementById(id);
  if (!el) {
    throw new Error(`Elemento ${id} no encontrado`);
  }
  return el;
};

export const DOM_ELEMENTS = {
  social: $("input-social") as HTMLInputElement,
  nombreComercial: $("input-comercial") as HTMLInputElement,
  cif: $("input-cif") as HTMLInputElement,
  direccion: $("input-direccion") as HTMLInputElement,
  email: $("input-email") as HTMLInputElement,
  website: $("input-website") as HTMLInputElement,
  fecha: $("input-fecha") as HTMLInputElement,

  btnPrivacidad: $("btn-toggle-privacidad") as HTMLButtonElement,
  btnLegal: $("btn-toggle-legal") as HTMLButtonElement,
  txtPrivacidad: $("txt-toggle-privacidad") as HTMLDivElement,
  txtLegal: $("txt-toggle-legal") as HTMLDivElement,

  btnGenerate: document.querySelector(
    "button[type='submit']"
  ) as HTMLButtonElement,
  btnReset: $("input-reset") as HTMLButtonElement,

  txtTogglePrivacidad: $("txt-toggle-privacidad"),
  txtToggleLegal: $("txt-toggle-legal"),

  coppyBtnPrivacidad: document.querySelector('#btn-toggle-privacidad img') as HTMLButtonElement,
  coppyBtnLegal: document.querySelector('#btn-toggle-legal img') as HTMLButtonElement,

  alertContainer: $("alert-container") as HTMLDivElement,

  prvSocial: $("prv-social") as HTMLSpanElement,
  prvComercial: $("prv-comercial") as HTMLSpanElement,
  prvCif: $("prv-cif") as HTMLSpanElement,
  prvDireccion: $("prv-direccion") as HTMLSpanElement,
  prvEmail: $("prv-email") as HTMLSpanElement,
  prvWebsite: $("prv-website") as HTMLSpanElement,
  prvFecha: $("prv-fecha") as HTMLSpanElement,
};

export const INPUTS_PLACEHOLDER = {
  placeholderSocial: "Empresa Ejemplo. SL",
  placeholderComercial: "Empresa Ejemplo",
  placeholderCif: "123456789X",
  placeholderDireccion: "Calle de Prueba 456, 1-2, 08000 - Barcelona, España",
  placeholderEmail: "ejemplo@empresa.com",
  placeholderWebsite: "www.empresaejemplo.es",
  placeholderFecha: Date.now().toLocaleString(),
  placeholderPolitica: "Politica de Privacidad... the privacidad text will appear here",
  placeholderLegal: "Avíso Legal... the legal text will appear here",
};
