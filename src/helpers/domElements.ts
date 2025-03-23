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
};
