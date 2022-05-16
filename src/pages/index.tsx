import { Article, Figcaption, Figure } from '@/elements';
import { H } from '@/components/h';
import {
  FootnoteRef as Ref,
  Footnotes,
  FootnotesProvider,
} from '@/components/ref';

export default function Home() {
  return (
    <FootnotesProvider>
      <article className="page_content_layout">
        <h1 data-full-bleed data-show-section-id>
          Initial Heading
        </h1>
        <p>
          <dfn id="evm">
            <abbr data-title="Ethereum Virtual Machine">EVM{` `}</abbr>
          </dfn>
          is a blockchain-based sofrward platform
        </p>
        <abbr data-title="Electronic Health Record">EHR</abbr>
        <p data-full-bleed>
          CLIP (<em>Contrastive Language–Image Pre-training</em>) builds on a
          large body of work on zero-shot transfer, natural language
          supervision, and <mark>multimodal</mark> learning. The idea of
          zero-data learning dates back over a decade
        </p>

        <dl>
          <dt> Hector Crean </dt>
          <dd> is a bloke who occassionally runs</dd>
          <dt> Hello</dt> <dd> Is a common greeting</dd>
        </dl>

        <abbr />

        <blockquote />

        <dl>
          <dd />
          <dt />
        </dl>

        <dialog />

        <p data-full-bleed>
          CLIP (<em>Contrastive Language–Image Pre-training</em>) builds on a
          large body of work on zero-shot transfer, natural language
          supervision, and multimodal learning. The idea of zero-data learning
          dates back over a decade
        </p>
        <p>
          CLIP (<em>Contrastive Language–Image Pre-training</em>) builds on a
          large body of work on zero-shot transfer, natural language
          supervision, and multimodal learning. The idea of zero-data learning
          dates back over a decade
        </p>

        <p data-full-bleed>
          CLIP (<em>Contrastive Language–Image Pre-training</em>) builds on a
          large body of work on zero-shot transfer, natural language
          supervision, and multimodal learning. The idea of zero-data learning
          dates back over a decade
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          imperdiet sagittis laoreet. Pellentesque accumsan est quis lorem
          consectetur efficitur. In vel nibh et felis tempus condimentum.
          Vestibulum suscipit massa metus, non tincidunt est volutpat ac.
          Curabitur vitae viverra mauris. Maecenas non ultrices orci, non
          faucibus dui. Proin a aliquet velit. Suspendisse ac sapien eu mi
          venenatis accumsan a sit amet arcu. Aliquam vitae velit orci. Aliquam
          pulvinar vitae quam a scelerisque. Nam mollis tellus vel iaculis
          imperdiet. Donec maximus egestas bibendum. Aliquam quis libero ac est
          finibus consectetur. Aenean mollis eu lacus non porttitor. In feugiat
          accumsan efficitur. Nam lobortis facilisis orci, id placerat ex
          faucibus in. Vivamus mattis tempus ex, et gravida justo. Aliquam
          venenatis imperdiet consectetur. Curabitur mattis lobortis venenatis.
          Aenean eget ante risus. Nam luctus nisi massa, ac facilisis ex tempor
          vel. Donec iaculis, quam a iaculis suscipit, quam enim dignissim
          nulla, id semper nibh dui quis nulla. Nunc augue orci, varius in
          ultrices a, fermentum vitae leo. Nam blandit cursus porta. Aenean
          fringilla pretium nibh, quis euismod risus bibendum ac. In pulvinar
          odio sem. Nunc vitae dui hendrerit justo cursus tincidunt. Nunc sed
          fringilla tellus. Aenean consequat sapien tellus, a luctus arcu
          ultricies nec. Quisque pulvinar turpis quis erat consectetur, ac
          rutrum ligula iaculis. Fusce sagittis magna leo, at viverra nisi
          pellentesque nec. In enim ex, luctus sit amet neque eget, pellentesque
          mattis nisl. In eu elementum eros. Praesent venenatis egestas velit,
          id pretium tellus gravida non.
        </p>

        <figure data-full-bleed>
          <img src="https://picsum.photos/200/300" />
          <figcaption>The caption of this image</figcaption>
        </figure>

        <figure data-full-bleed>
          <img src="https://picsum.photos/300/300" />
          <figcaption>The caption of this image</figcaption>
        </figure>

        <figure data-full-bleed>
          <img src="https://picsum.photos/300/800" />
          <figcaption>The caption of this image</figcaption>
        </figure>

        <div>
          CLIP (<em>Contrastive Language–Image Pre-training</em>) builds on a
          large body of work on zero-shot transfer, natural language
          supervision, and multimodal learning. The idea of zero-data learning
          dates back over a decade
        </div>

        <small> This is a small footnote type thing</small>

        <button> Button test </button>

        <p>
          A <dfn id="def-validator">validator</dfn> is a program that checks for
          syntax errors in code or documents.
        </p>

        <p>
          You can use <abbr title="Cascading Style Sheets">CSS</abbr> to style
          your
          <abbr title="HyperText Markup Language">HTML</abbr>.
        </p>

        <details>
          <summary>
            I have keys but no doors. I have space but no room. You can enter
            but can’t leave. What am I?
          </summary>
          A keyboard.
        </details>

        <hr data-full-bleed />

        <hr data-full-bleed />

        <H as="h1"> Page Titlte </H>
        <p>
          Start editing to see some{` `}
          <Ref id="123" description="Magic may or may not be happening">
            magic
          </Ref>
          {` `}
          happen!{` `}
          <Ref description="Magic may or may not be happening">magic</Ref>
        </p>

        <H as="h2"> Page Subtitle</H>

        <p>
          Maintaining{` `}
          <Ref description="Footnotes are notes placed at the bottom of a page. They cite references or comment on a designated part of the text above it.">
            <strong>footnotes</strong>
          </Ref>
          {` `}
          manually can be a pain. By using{` `}
          <Ref description="Cascading Style Sheets">CSS</Ref>
          {` `}
          <Ref
            id="with-custom-id"
            description={
              <>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS counters
                </a>
                {` `}
                are, in essence, variables maintained by CSS whose values may be
                incremented by CSS rules to track how many times they’re used.
              </>
            }
          >
            counters
          </Ref>
          {` `}
          to add the numbered references in the text and an ordered list to
          display the actual footnotes in the footer, it becomes extremely easy.
        </p>
        <Footnotes data-full-bleed />
      </article>
    </FootnotesProvider>
  );
}
