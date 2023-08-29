// .d.ts uzantısnı typescript global alan olarak görüyor. dosyalarda tanımladığımız typelara herhangi bir export-import yapmadan erişim sağlayabiliyoruz


interface TodoType {
    todo: string;
    isDone: boolean;
    id: string | number; // id bilgisi string yada number olabilir. İki veri tipi de kabul
  }
  
  
  type AddFn = (text: string) => Promise<void>;
  
  type ToggleFn = (todo:TodoType) => Promise<void>;
  
  type DeleteFn = (id: string | number) => Promise<void>;
  