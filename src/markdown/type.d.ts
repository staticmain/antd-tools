import { MarkdownElement } from './const'

// 标题等级类型
export type TitleLevel =  1 | 2 | 3 | 4 | 5 | undefined;

export interface BoldToken {
    type: MarkdownElement.Bold;
    content: string;
    match: string;
}

export interface ItalicToken {
    type: MarkdownElement.Italic;
    content: string;
    match: string;
}

export interface InlineCodeToken {
    type: MarkdownElement.InlineCode;
    content: string;
    match: string;
}

// 额外的格式
interface ExtraToken {
    /** 加粗 */
    bold?: BoldToken[];
    /** 斜体 */
    italic?: string[];
    /** 行内代码 */
    inlineCode?: string[];
}

interface ParagraphToken extends ExtraToken {
    type: MarkdownElement.Paragraph;
    content: string;
}

interface ListItemToken extends ExtraToken {
    type: MarkdownElement.ListItem;
    content: string;
    isOrdered: boolean;
}

interface HeadingToken extends ExtraToken {
    type: MarkdownElement.Heading;
    content: string;
    level: TitleLevel;
}

export type Token = ParagraphToken | ListItemToken | HeadingToken;