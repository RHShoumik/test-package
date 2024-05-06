const sample = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem provident minima totam ducimus nam magni quos
          facere temporibus, blanditiis cupiditate necessitatibus atque quis minus rem quidem ab sit et modi doloremque
          ullam harum eveniet quisquam at dolor? Nesciunt harum unde repellat iusto. Error animi ipsum provident optio
          nesciunt quaerat? Quibusdam, odio rerum adipisci omnis similique facilis totam voluptatem magnam obcaecati.
          Quis inventore nostrum in vitae labore tempore amet voluptatem vel corporis, unde aliquid voluptate aperiam
          dignissimos libero ab deleniti, deserunt dolorum debitis accusantium adipisci doloribus quos recusandae
          blanditiis. Labore debitis incidunt aspernatur cum repellat quisquam odit minus fugiat aut autem quaerat
          consequuntur quidem illum iure inventore amet accusantium doloribus reiciendis dicta ex impedit laboriosam,
          perferendis unde? Id, iure. Consequatur non eveniet dignissimos rerum possimus id? Fuga, ab aspernatur!
          Similique vero labore voluptate officia expedita explicabo optio laborum tempore facilis, temporibus ex,
          aliquid deserunt corrupti dolore vel nemo dolor est consectetur inventore fugit debitis dicta obcaecati
          voluptatem. Nobis asperiores ab dignissimos iure, ex autem! Similique cum doloremque sunt obcaecati
          necessitatibus accusantium tempore repellendus praesentium, eligendi quo vero rem est dolorum, omnis quisquam
          dicta reiciendis asperiores dolor ea molestias a voluptatum? Corporis corrupti eum nesciunt, dolor nulla
          quidem voluptatem distinctio placeat sit, eius expedita quaerat porro numquam dolore repudiandae at? Culpa
          earum laboriosam et, necessitatibus fuga quam ipsum molestiae, dolorem voluptates totam in iste. Possimus
          ducimus dolorum libero accusamus quos nulla similique eaque, nesciunt asperiores repellendus blanditiis
          officiis iure mollitia modi velit et nisi reprehenderit doloremque! Sequi quae dicta fugit ullam quod aliquid
          vitae nulla placeat, cupiditate soluta, repellendus possimus magnam itaque velit blanditiis architecto
          praesentium laudantium unde. Magni, velit inventore, possimus aperiam ex quod iste esse architecto dignissimos
          nemo quaerat reprehenderit eaque ducimus praesentium consequatur vero nisi. Debitis delectus non, dolor neque
          voluptatem voluptas quasi unde itaque similique quisquam rerum sint ducimus? Dolore, veritatis tempore! Sequi
          laudantium, eveniet temporibus aspernatur quo distinctio, ipsa magni repudiandae voluptate minima consequatur
          similique reiciendis in obcaecati veniam cumque, dolor ipsam culpa ex suscipit. Aspernatur ipsam corrupti
          ratione animi quae. Perferendis dolorem sapiente tempora consectetur? Officia doloribus, quas ea porro
          assumenda expedita sint velit adipisci delectus! Perferendis quidem enim fuga dolorum qui ea. Quos quo,
          accusantium, aperiam sed consectetur voluptatem harum eius tenetur labore, suscipit nisi iusto facilis
          voluptas vel. Consectetur molestias pariatur itaque eos inventore et facilis dolorem! Eligendi velit
          consectetur aut sint, voluptatibus perspiciatis vitae eaque, ad asperiores quo, quisquam doloribus cumque amet
          omnis iste quae molestiae debitis expedita labore ex repellendus quis optio natus! Dignissimos unde veniam
          perspiciatis neque blanditiis illum temporibus quas expedita praesentium, accusamus fugit excepturi est
          incidunt cupiditate accusantium nostrum, exercitationem quidem possimus asperiores consectetur, ullam
          molestiae! Maxime ad ex distinctio mollitia similique laborum autem id nam adipisci magni consequatur pariatur
          atque praesentium, optio at officia voluptates reiciendis explicabo unde non. Ex aspernatur qui debitis
          corporis eius rerum, quia dolorem iure corrupti explicabo quam earum consequuntur placeat blanditiis rem ipsum
          nostrum expedita beatae temporibus fuga numquam saepe ullam tempore vero. Dicta suscipit veniam voluptatem ea
          a dolore magnam voluptates dolorem.`;
const ContentFiller = ({
  len = 200,
  as = "p",
  className,
}: {
  len?: number;
  as?: React.ElementType<any>;
  className?: string;
}) => {
  const As = as;
  return <As className={className}>{sample.substring(0, len)}</As>;
};
export default ContentFiller;
